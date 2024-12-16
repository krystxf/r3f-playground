import { UiComponentSlot } from "@/components/UiComponentSlot";

export default function HomePage() {
    return (
        <div className="flex w-full">
            <UiComponentSlot className="">
                <div>Ingenuity</div>
            </UiComponentSlot>
            <UiComponentSlot>
                <div>Perseverance</div>
            </UiComponentSlot>
        </div>
    );
}
