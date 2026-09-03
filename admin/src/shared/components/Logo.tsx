import { Button } from "@base-ui/react";
import { Broccoli } from "lucide-react";
import type { ComponentProps } from "react";

type CustomButtonProps = ComponentProps<typeof Button>;


const Logo = ({...props} : CustomButtonProps) => {
  return (
    <div className="bg-primary/20 flex items-center justify-center rounded-xl w-fit p-2">
        <Broccoli className="w-10 h-10 stroke-primary" />
    </div>
  )
}

export default Logo