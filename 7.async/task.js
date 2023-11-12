class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {

        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы')
        }

        if (this.alarmCollection.find(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        
        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true
        });          
    }

    removeClock(time) {



        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {


        
      return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
      })
    }

     

    start() {
        if (this.intervalId) {
            return;
        } 
        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();
            this.alarmCollection.forEach(element => {
                if (element.time === currentTime && element.canCall) {
                    element.callback();
                    element.canCall = false;
                }
            })
                
        }, 1000) 
    } 
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(element => element.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
