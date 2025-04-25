class Gerenciamento {
    constructor() {
        this.central = CentralDeLuzes.getInstance('casa');
        this.setupEventListeners();
    }

    setupEventListeners() {
        const buttons = document.querySelectorAll('button[data-comodo]');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const roomName = button.getAttribute('data-comodo');
                const iconEl = document.querySelector(`div[data-icon="${roomName}"]`);

                this.toggleLight(roomName, button, iconEl);
            })
        });
    }

    toggleLight(roomName, buttonEl, iconEl) {
        if (this.central.isOn(roomName)) {
            this.central.off(roomName)

            iconEl.classList.remove('bg-success');
            iconEl.classList.add('bg-danger');

            buttonEl.classList.remove('btn-info');
            buttonEl.classList.add('btn-outline-info');
        } else {
            this.central.on(roomName);

            iconEl.classList.remove('bg-danger');
            iconEl.classList.add('bg-success');

            buttonEl.classList.remove('btn-outline-info');
            buttonEl.classList.add('btn-info');
        }

        this.updateUI();
    }

    updateUI() {
        const roomsOn = this.central.getRoomsOn();

        console.log(`Cômodos com as luzes acesas: ${roomsOn.length}`);
    }
}