import { TrustedServiceAreaPage } from "@/components/widgets/trusted-service-area-page";
import { buildServiceAreaMetadata, serviceAreaProfiles } from "@/lib/serviceAreaProfiles";

const profile = serviceAreaProfiles["east-missoula"];

export const metadata = buildServiceAreaMetadata(profile);

export default function EastMissoulaServiceAreaPage() {
    return <TrustedServiceAreaPage profile={profile} />;
}
