import React, { ReactElement } from 'react';

export default function MoviePage({
  params,
}: {
  params: { slug: string };
}): ReactElement {
  return <h1>{params.slug}</h1>;
}
