import { LightningElement } from 'lwc';

export default class TestingLWC extends LightningElement {

    countryDetails ='';

    addTodoHandler() {
        this.init();
    }

    init = async () => {
        try {
            const inputBox = this.template.querySelector("lightning-input");
            console.log(" inputBox.value  === "+inputBox.value);            
            const countryDetail = await this.getCountry(inputBox.value);
            this.countryDetails = JSON.stringify(countryDetail.data.Country);

            //const countryDetail2 = JSON.stringify(countryDetail.data.Country);
            //console.log(" countryDetail  === "+ JSON.stringify(countryDetail) );            
            //console.log(" countryDetail  === "+ JSON.stringify(countryDetail.data.Country) );            
            //console.log("countryDetail  ==== "+countryDetail.data.Country);
        } catch (error) {
            this.error = error;
        } finally {
            this.isLoaded = true;
        }
    }

    getCountry(Country) {


        const query = `
        query getCountry ($name: String!){
            Country (name:$name) {
            name
            capital
            population
            nativeName
            }
        }
      `;

        return this.queryFetch
        (query
            , { name: Country }
        ).then(data => {
            return data;
		})
		.catch(e=>console.log(e));

      }

    queryFetch(query, variables) {

        return fetch('https://countries-274616.ew.r.appspot.com/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            query: query,
            variables: variables
        })})
        .then(res => res.json())
        
      }



}