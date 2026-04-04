interface ITermFormProps {
  title: string;
  content: string | React.ReactNode;
  index: string;
}

const TermForm = ({ title, content, index }: ITermFormProps) => {
  return (
    <div className="flex flex-row gap-8">
      <h1 className="font-bungee leading-10 text-4xl opacity-30 m-auto max-w-10">{index}</h1>
      <div className="flex flex-col gap-1 w-full">
        <h2 className="text-2xl leading-8 tracking-[-0.6px] uppercase ">{title}</h2>
        {content}
      </div>
    </div>
  );
};

export default TermForm;
