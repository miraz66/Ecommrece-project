import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

export default function BlogMain(props) {
    return (
        <div className="grid grid-cols-2 gap-10">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded">
                <img
                    src={props.image}
                    alt="Front of men's Basic Tee in black."
                    className="object-cover w-full h-80"
                />
            </div>

            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded">
                <div className="space-y-2">
                    <h3 className="text-sm uppercase text-gray-800">
                        {props.head}
                    </h3>
                    <h2 className="text-3xl font-medium text-gray-600">
                        {props.title}
                    </h2>
                    <p className="text-sm pt-4 text-gray-500 tracking-wide leading-7 line-clamp-2">
                        {props.description}
                    </p>
                </div>

                <hr className="my-4" />

                <div className="flex items-center justify-between">
                    <div className="flex items-end gap-1">
                        <ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4 text-red-600" />
                        <p className="text-xs text-red-600">
                            {props.comment} Comments
                        </p>
                    </div>
                    <p className="text-xs text-red-600">{props.date}</p>
                </div>
            </div>

            <hr className="col-span-2" />
        </div>
    );
}
