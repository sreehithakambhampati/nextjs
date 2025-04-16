//We cant implement counter function in this page beacuse to implement counter function we need use hook
//Only client side components can render counter.tsx
//We cant use metadata in client side components
import { Counter } from "./counter";

export const metadata={
    title : "counter"
}

export default function counterFunc(){
     return <Counter/>;
}

