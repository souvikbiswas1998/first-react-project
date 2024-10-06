import './Test.scss';

export interface TestProps {
  data?: string;
  flag?: boolean
}

export function Test(data: TestProps) {
  console.log(data);
  return <div className={data.flag ? 'test' : ''}>Test: {data.data}</div>;
}
