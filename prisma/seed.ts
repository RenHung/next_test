import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const res = await prisma.invoice.findMany();
	// await prisma.invoice.createMany({
	// 	data: [
	// 		{
	// 			amount: 15795,
	// 			status: "pending",
	// 			date: "2022-12-06",
	// 			customerId: 1
	// 		},
	// 		{
	// 			customerId: 2,
	// 			amount: 20348,
	// 			status: "pending",
	// 			date: "2022-11-14",
	// 		},
	// 		{
	// 			customerId: 5,
	// 			amount: 3040,
	// 			status: "paid",
	// 			date: "2022-10-29",
	// 		},
	// 		{
	// 			customerId: 4,
	// 			amount: 44800,
	// 			status: "paid",
	// 			date: "2023-09-10",
	// 		},
	// 		{
	// 			customerId: 6,
	// 			amount: 34577,
	// 			status: "pending",
	// 			date: "2023-08-05",
	// 		},
	// 		{
	// 			customerId: 3,
	// 			amount: 54246,
	// 			status: "pending",
	// 			date: "2023-07-16",
	// 		},
	// 		{
	// 			customerId: 1,
	// 			amount: 666,
	// 			status: "pending",
	// 			date: "2023-06-27",
	// 		},
	// 		{
	// 			customerId:4,
	// 			amount: 32545,
	// 			status: "paid",
	// 			date: "2023-06-09",
	// 		},
	// 		{
	// 			customerId: 5,
	// 			amount: 1250,
	// 			status: "paid",
	// 			date: "2023-06-17",
	// 		},
	// 		{
	// 			customerId: 6,
	// 			amount: 8546,
	// 			status: "paid",
	// 			date: "2023-06-07",
	// 		},
	// 		{
	// 			customerId: 2,
	// 			amount: 500,
	// 			status: "paid",
	// 			date: "2023-08-19",
	// 		},
	// 		{
	// 			customerId: 6,
	// 			amount: 8945,
	// 			status: "paid",
	// 			date: "2023-06-03",
	// 		},
	// 		{
	// 			customerId: 3,
	// 			amount: 1000,
	// 			status: "paid",
	// 			date: "2022-06-05",
	// 		},
	// 	],
	// });
	// const res = await prisma.customer.findMany();
	console.log(res);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
