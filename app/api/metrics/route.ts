import { NextResponse } from "next/server"

// Metrics ingestion endpoint — reserved for future infrastructure agent integration.
// Requires InfrastructureAsset and ApiKey models which are not yet provisioned.
export async function POST() {
  return NextResponse.json(
    { error: "Metrics ingestion not yet available" },
    { status: 501 },
  )
}
