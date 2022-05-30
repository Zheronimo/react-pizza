import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={465}
    viewBox='0 0 280 465'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}>
    <circle cx='135' cy='125' r='125' />
    <rect x='0' y='320' rx='10' ry='10' width='280' height='89' />
    <rect x='4' y='430' rx='10' ry='10' width='90' height='27' />
    <rect x='0' y='270' rx='10' ry='10' width='280' height='28' />
    <rect x='127' y='419' rx='10' ry='10' width='153' height='46' />
  </ContentLoader>
);

export default Skeleton;
