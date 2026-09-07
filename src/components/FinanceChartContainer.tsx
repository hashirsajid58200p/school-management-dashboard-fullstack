import prisma from "@/lib/prisma";
import FinanceChart from "./FinanceChart";
import FormContainer from "./FormContainer";

const FinanceChartContainer = async () => {
  const currentYear = new Date().getFullYear();
  const startOfYear = new Date(currentYear, 0, 1);
  const endOfYear = new Date(currentYear, 11, 31, 23, 59, 59);

  const payments = await prisma.feePayment.findMany({
    where: {
      date: {
        gte: startOfYear,
        lte: endOfYear,
      },
    },
    select: {
      amount: true,
      type: true,
      date: true,
    },
  });

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthlyTotals: { [key: string]: { income: number; expense: number } } =
    {};
  months.forEach((m) => {
    monthlyTotals[m] = { income: 0, expense: 0 };
  });

  payments.forEach((p) => {
    const month = months[new Date(p.date).getMonth()];
    if (month && monthlyTotals[month]) {
      if (p.type.toLowerCase() === "income") {
        monthlyTotals[month].income += p.amount;
      } else {
        monthlyTotals[month].expense += p.amount;
      }
    }
  });

  const chartData = months.map((m) => ({
    name: m,
    income: Math.round(monthlyTotals[m].income),
    expense: Math.round(monthlyTotals[m].expense),
  }));

  return (
    <div className="bg-white rounded-xl w-full h-full p-4 flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-lg font-semibold">Finance ({currentYear})</h1>
          <span className="text-xs text-gray-400">
            Real tuition income vs. school operating expenses
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FormContainer table="feePayment" type="create" />
        </div>
      </div>
      <div className="flex-1 w-full min-h-[300px]">
        <FinanceChart data={chartData} />
      </div>
    </div>
  );
};

export default FinanceChartContainer;
