"use client"
import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./Button";
interface EmptyStateProps {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
    title = "No Exect Match",
    subtitle ="Try changing or removing some filters",
    showReset,
}) => {
    const router = useRouter();
    return(
        <div className="
        h-[60vh]
        flex
        flex-col
        gap-2
        items-center
        justify-center
        ">
            <Heading 
            center
            title={title}
            subtitle={subtitle}
            />
            <div className="w-48 mt-4">
                {showReset && (
                    <Button 
                    onClick={() => router.push('/')}
                    outline
                    label="Remove all filters"
                    />
                )}
            </div>
        </div>
    )
}
export default EmptyState