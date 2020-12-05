import React from 'react';

import { SkeletonTable, SkeletonTableRow } from '../../components/skeletons';
import { TableBody, TableHead } from '../../components/tables';

export const SkeletonHeading = () => (
  <TableHead>
    <SkeletonTableRow title />
  </TableHead>
);

export const SkeletonContent = () => (
  <TableBody>
    <SkeletonTable />
  </TableBody>
);
