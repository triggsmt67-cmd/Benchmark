import { TrustedServiceAreaPage } from "@/components/widgets/trusted-service-area-page";
import { buildServiceAreaMetadata, serviceAreaProfiles } from "@/lib/serviceAreaProfiles";

const profile = serviceAreaProfiles.bonner;

export const metadata = buildServiceAreaMetadata(profile);

export default function BonnerServiceAreaPage() {
    return <TrustedServiceAreaPage profile={profile} />;
}
