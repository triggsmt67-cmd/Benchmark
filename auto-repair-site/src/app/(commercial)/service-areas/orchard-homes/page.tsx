import { TrustedServiceAreaPage } from "@/components/widgets/trusted-service-area-page";
import { buildServiceAreaMetadata, serviceAreaProfiles } from "@/lib/serviceAreaProfiles";

const profile = serviceAreaProfiles["orchard-homes"];

export const metadata = buildServiceAreaMetadata(profile);

export default function OrchardHomesServiceAreaPage() {
    return <TrustedServiceAreaPage profile={profile} />;
}
