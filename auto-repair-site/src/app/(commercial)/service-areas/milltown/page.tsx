import { TrustedServiceAreaPage } from "@/components/widgets/trusted-service-area-page";
import { buildServiceAreaMetadata, serviceAreaProfiles } from "@/lib/serviceAreaProfiles";

const profile = serviceAreaProfiles.milltown;

export const metadata = buildServiceAreaMetadata(profile);

export default function MilltownServiceAreaPage() {
    return <TrustedServiceAreaPage profile={profile} />;
}
