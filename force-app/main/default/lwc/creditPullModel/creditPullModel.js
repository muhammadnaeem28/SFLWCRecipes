import { LightningElement,track,api } from 'lwc';
import getCurrentTodos from "@salesforce/apex/ToDoController.getCurrentTodos";


export default class ModalPopupLWC extends LightningElement {
    //Boolean tracked variable to indicate if modal is open or not default value is false as modal is closed when page is loaded 
    

    @api record;
    @api title;
    
    closeModal() {
        console.log("closecreditpullevent triggered");
        const closeEvent = new CustomEvent('close')
        this.dispatchEvent(closeEvent);
    }

    handleSubmit(event) {
        console.log('onsubmit event recordEditForm'+ event.detail.fields);
        this.closeModal();
    }
    handleSuccess(event) {
        console.log('onsuccess event recordEditForm', event.detail.id);
    }

}