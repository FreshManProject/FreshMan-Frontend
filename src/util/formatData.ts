export function formatNumber(number: number) {
    return new Intl.NumberFormat().format(number);
}
