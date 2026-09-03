import { Boxes, TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
export const description = "A pie chart with a label"
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
]
const chartConfig = {
  chrome: {
    label: "Berhasil",
    color: "var(--primary)",
  },
  safari: {
    label: "Dibatalkan",
    color: "var(--destructive)",
  },
} satisfies ChartConfig

const DashboardSecondaryGraph = () => {
  return (
    <Card className="flex-1 bg-primary/10 self-stretch flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="flex items-center gap-x-2">
          <Boxes className="mb-2 h-5 w-5 stroke-primary" />
          Rasio Pemesanan
        </CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0 h-60">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-52 pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie fillOpacity={0.5} stroke="var(--primary)" data={chartData} dataKey="visitors" label nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

export default DashboardSecondaryGraph