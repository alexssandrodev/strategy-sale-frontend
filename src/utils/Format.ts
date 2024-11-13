
class Format {

    static formatDate(date: Date) {
        return new Intl.DateTimeFormat('pt-BR', {
            dateStyle: 'short'
        }).format(date);
    }

    static formatPrice(price: number) {
        return new Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            style: 'currency'
        }).format(price);
    }

}

export { Format };
