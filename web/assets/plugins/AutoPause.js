class AutoPause{

    constructor({video,threshold,visibilityChange}) {
        this.player = video

        this.threshold = threshold;
        this.handler = this.handler.bind(this);

        this.pauseOnVisibilityChange = this.pauseOnVisibilityChange.bind(this);
        this.activeVisibilityChange = visibilityChange || false;
    }

    run(){

        const observer = new IntersectionObserver(this.handler, {
        threshold: this.threshold,
        })

        observer.observe(this.player);

        document.addEventListener('visibilitychange', this.pauseOnVisibilityChange )

    }

    handler(entries){
        const entry = entries[0];
        const visible = entry.intersectionRatio >= this.threshold

        visible ? this.player.play():this.player.pause()

    }

    pauseOnVisibilityChange (){
        const isvisible = document.visibilityState === "visible";

        if(this.activeVisibilityChange){
            isvisible ? this.player.play() : this.player.pause();
        }

    }

}

export default AutoPause;