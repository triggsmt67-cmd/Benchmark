export const siteConfig = {
    businessName: "Benchmark Automotive Service",
    address: {
        street: "1914 North Ave W",
        city: "Missoula",
        state: "MT",
        zip: "59801",
        country: "US"
    },
    phone: {
        display: "(406) 317-1405",
        link: "+14063171405", // for href="tel:..."
        schema: "+1-406-317-1405"
    },
    email: "driggs@benchmarkautomotiveservice.com",
    get formattedAddress() {
        return `${this.address.street}\n${this.address.city}, ${this.address.state} ${this.address.zip}\nUnited States`;
    },
    get cityState() {
        return `${this.address.city}, ${this.address.state}`;
    },
    get inlineAddress() {
        return `${this.address.street}, ${this.address.city}, ${this.address.state} ${this.address.zip}`;
    },
    mapUrl: "https://maps.google.com/maps?q=1914+North+Ave+W,+Missoula,+MT+59801&t=&z=15&ie=UTF8&iwloc=&output=embed",
    businessHours: {
        mondayFriday: "8:00 AM – 5:00 PM",
        saturday: "By Appointment",
        sunday: "Closed"
    },
    get formattedBusinessHours() {
        return [
            { label: "Monday \u2013 Friday", time: this.businessHours.mondayFriday },
            { label: "Saturday", time: this.businessHours.saturday },
            { label: "Sunday", time: this.businessHours.sunday }
        ];
    }
};
