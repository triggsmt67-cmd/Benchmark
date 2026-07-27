import { TrustedServiceAreaPage } from "@/components/widgets/trusted-service-area-page";
import { buildServiceAreaMetadata, serviceAreaProfiles } from "@/lib/serviceAreaProfiles";

const profile = serviceAreaProfiles["target-range"];

export const metadata = buildServiceAreaMetadata(profile);

export default function TargetRangeServiceAreaPage() {
    return <TrustedServiceAreaPage profile={profile} />;
}
