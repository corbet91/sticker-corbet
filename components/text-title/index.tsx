interface TextTitleProps {
    title: string
    content:string
}
const TextTitle = ({ title, content }: TextTitleProps) => {
    return (
        <div className="flex flex-row items-center gap-8 h-full">
            <div className="bg-[#006571] w-3 h-19.5" />
            <div className="flex flex-col">
                <div className="text-[#2F2E2E] text-[36px] font-bungee tracking-[-0.9px] leading-10">{title}</div>
                <div className="text-[#5C5B5B]">{content}</div>
            </div>
        </div>
    )
}
export default TextTitle 