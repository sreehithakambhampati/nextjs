import { Card } from "@/components/card";
import Link from "next/link";

export default async function NotificationMetrics() {
//   await new Promise((resolve) => setTimeout(resolve, 20000)); // Wait for 2 ms

  return (
    <>
    <Card>Notification Metrics
    <Link href="complex-dashboard/archived">Archived</Link>
    </Card>
    {/* Sub-navigation in routes */}
    
    </>
  );
}
