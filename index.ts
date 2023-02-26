// Напиши и типизируй функцию, рассчитывающую стоимость с учетом скидки и рассрочки на заданное количество месяцев

type TotalPriceArgs = {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
};

function totalPrice({ price, discount, isInstallment, months }: TotalPriceArgs): number {
  let total = price;

  if (discount) {
    total = price * (100 - discount) / 100;
  }

  if (isInstallment) {
    total *= 1.0; // Можно добавить проценты за использование рассрочки
  }

  if (months) {
    total /= months;
  }

  return Math.round(total);
}

console.log(totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 })); // 6250
