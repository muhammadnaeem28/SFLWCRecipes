import { LightningElement,track, api } from 'lwc';

export default class ContactInfoLWC extends LightningElement {  
    
    @track isModalOpen= false;
    @track contactId = '0032x000003MTWXAA4';
    @track modelTitle = 'Client Conent & Credit Pull' 
    openModal() {
        // to open modal set isModalOpen tarck value as true
        this.isModalOpen = true;
    }

    
    closeHandler() {
        console.log("hanldeclosecreditpull handled ");
    
        this.isModalOpen = false;
    }

    

}