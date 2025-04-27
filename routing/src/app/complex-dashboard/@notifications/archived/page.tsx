import { Card } from "@/components/card";
import Link from "next/link";

export default async function ArchivedNotifications() {
//   await new Promise((resolve) => setTimeout(resolve, 20000)); // Wait for 2 ms

  return (
    <>
    <Card>Archived Notifications
    <Link href="/complex-dashboard">Default</Link>
    </Card>
    
    </>
  );
}
