<script>

export default {
    name: 'Counter',
    props: ['year', 'month', 'date', 'hour', 'minute', 'second', 'millisecond'],
    data() {
        return {
            displayDays: 0,
            displayHours: 0,
            displayMinutes: 0 ,
            displaySeconds: 0,
            loaded: false,
            expired: false,
            d:"Días",
            h:"Hs.",
            m:"Min.",
            s:"Seg.",
            title:"Faltan:",
            title1:"Llegó el Día"
        };
    },
    computed: {
        _seconds() {
            return 1000;
        },
        _minutes() {
            return this._seconds * 60;
        },
        _hours() {
            return this._minutes * 60;
        },
        _days() {
            return this._hours * 24;
        },
        end() {
            return new Date(
                this.year,
                this.month - 1, // Los meses en JavaScript van de 0 a 11
                this.date,
                this.hour,
                this.minute,
                this.second,
                this.millisecond
            );
        }
    },
    mounted() {
        this.showRemaining();
    },
    methods: {
        formatNum(num) {
            return num < 10 ? '0' + num : num;
        },
        showRemaining() {
            const timer = setInterval(() => {
                const now = new Date();
                const distance = this.end.getTime() - now.getTime();

                if (distance < 0) {
                    clearInterval(timer);
                    this.expired = true;
                    this.loaded = true;
                    return;
                }

                const days = Math.floor(distance / this._days);
                const hours = Math.floor((distance % this._days) / this._hours);
                const minutes = Math.floor((distance % this._hours) / this._minutes);
                const seconds = Math.floor((distance % this._minutes) / this._seconds);

                this.displayMinutes = this.formatNum(minutes);
                this.displaySeconds = this.formatNum(seconds);
                this.displayHours = this.formatNum(hours);
                this.displayDays = this.formatNum(days);
                this.loaded = true;
            }, 1000);
        }
    }
};
</script>

<template>
    <div v-if="loaded" class="container">
        <section class="title__counter">
            <h3 v-show="!expired" class="counter__txt" >{{ title }}</h3>
            <h3 v-show="expired" class="counter__txt" >{{ title1 }}</h3>
        </section>
        
        <section class="counter__container">

            <div class="counter__content dia">
                {{ displayDays }}
                <span class="counter__label">{{ d }}</span>
            </div>

            <div class="counter__content hora">
                {{ displayHours }}
                <span class="counter__label">{{ h }}</span>
            </div>
            <div class="counter__content minuto">
                {{ displayMinutes }}
                <span class="counter__label">{{ m }}</span>
            </div>
            <div class="counter__content segundos">
                {{ displaySeconds }}
                <span class="counter__label">{{ s }}</span>
            </div>
        </section>

    </div>
</template>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
.title__counter{
    margin-bottom: 1.2rem;
}
.counter__txt{
    font-size: var(--font-size-24);
    color: var( --color__font_primary);
    font-family: var(--font_family_principal);
    font-weight: 400;
    font-style: italic;
    text-align: center;
    
}
.counter__container {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    font-family: var(--font_family_principal);/*numeros */
    font-weight: 400;
    font-style: normal;
    color:var( --color__font_primary);
    font-size:var(--font-size-32);
    line-height: 100%;
    
}

.counter__content {/*... */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border:1px solid red;
    width:75px;
    height:75px;
}

.dia,
.hora,
.minuto,
.segundos{
    /*tamaño del circulo */
    padding-top:.5rem;
    border-radius: 50%;
    border:1px solid var(--color__font_sencondary);
    margin-right:.5rem;
    
}

.counter__label {
    font-size: var(--font-size-12);
    color: var(--color__font_primary);
    font-family: var(--font_family_principal);/*detalle de abajo*/
    font-weight: 400;
    font-style: italic;
    text-align: center;
}
@media (min-width: 768px) and (max-width: 991px){
   
    .counter__content {
    width: 100%;
    height:100%;
    margin:.1rem;
    }
    .counter__container{
        font-size: 36px;
        margin: .5rem 0 ;
    }
    .counter__txt{
        font-size: 24px;
    }
    .counter__label {
        font-size: 24px;
    }
    .icon__film{
        margin-top:0;
        width:40px;
    }
    .counter__txt{
        font-size: var(--font-size-32);
    }
    .dia,
    .hora,
    .minuto,
    .segundos{
        width:90px;
        height:90px;
        margin-right:1rem;
    }
}
@media (min-width: 1025px) {
    .container{
        width:75%;
        height:50%;
    }
    .title__counter{
        height: 100%;
        margin-bottom: 3rem;
    }
    .counter__content {
    width: 100px;
    height:100%;
    }
    .counter__container{
        font-size: var(--font-size-36);
    }
    .counter__txt{
        font-size: var(--font-size-42);
    }
    .counter__label {
        font-size: var(--font-size-18);
    }
    .dia,
    .hora,
    .minuto,
    .segundos{
        width:110px;
        height:110px;
    }
}
</style>