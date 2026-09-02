import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { ChartLine } from 'lucide-react'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
} from "recharts"

const DashboardMainGraph = () => {

  const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
    { month: "July", desktop: 237 },
    { month: "August", desktop: 73 },
    { month: "September", desktop: 209 },
    { month: "October", desktop: 214 },
  ]

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "var(--primary)",
    },
  } satisfies ChartConfig

  return (
    <Card className="w-2/3 bg-accent">

      <main className="p-4 mb-6">
        <CardTitle className="flex items-center gap-x-2">
          <ChartLine className="mb-2 h-5 w-5 stroke-primary" />
          Progress Penjualan
        </CardTitle>

        <CardDescription>
          Lorem ipsum dolor sit amet consectetur, adipisicing.
        </CardDescription>
      </main>

      <CardContent className="h-75 w-full p-0">
        <ChartContainer
          config={chartConfig}
          className="h-full w-full"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent indicator="line" />
              }
            />

            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--primary)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>

    </Card>
  )
}

export default DashboardMainGraph