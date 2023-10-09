import { MatPaginatorIntl } from '@angular/material/paginator';

export function CustomPaginator(): any {
  const customPaginatorIntl = new MatPaginatorIntl();

  // Label
  customPaginatorIntl.itemsPerPageLabel = '1 ページあたりの行数: ';
  customPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number): string => {
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${length} 件中 ${startIndex + 1} - ${endIndex} 件目`;
  };
  return customPaginatorIntl;
}
