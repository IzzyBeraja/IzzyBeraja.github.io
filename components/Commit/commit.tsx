type Commit = {
  id: string;
  message: string;
  date: string;
  commitLink: string;
};

type Prop = {
  commitData: Commit;
};

const Commit = ({ commitData }: Prop) => {
  return <div></div>;
};

export default Commit;
