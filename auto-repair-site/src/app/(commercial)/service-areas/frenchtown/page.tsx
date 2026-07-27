import { TrustedServiceAreaPage } from "@/components/widgets/trusted-service-area-page";
import { buildServiceAreaMetadata, serviceAreaProfiles } from "@/lib/serviceAreaProfiles";

const profile = serviceAreaProfiles.frenchtown;

export const metadata = buildServiceAreaMetadata(profile);

export default function FrenchtownServiceAreaPage() {
    return <TrustedServiceAreaPage profile={profile} />;
}
