import { Button } from "@base-ui/react";
import { Broccoli } from "lucide-react";
import type { ComponentProps } from "react";

type CustomButtonProps = ComponentProps<typeof Button>;


const Logo = ({...props} : CustomButtonProps) => {
  return (
    <div className="bg-primary flex items-center justify-center rounded-xl w-fit p-2">
        <Broccoli className="w-10 h-10 stroke-secondary" />
    </div>
  )
}

export default Logo