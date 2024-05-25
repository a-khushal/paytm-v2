"use client"

import { useBalance } from "@repo/store/useBalance"

export default function Page(): JSX.Element {
  const balance = useBalance();
  return <div className="flex text-3xl text-blue-900">
    hello {balance}
  </div>
}
