export interface IApiResponse<T> {
  status: string;
  data: {
    content: T[];
    pageable: {
      pageNumber: number;
      pageSize: number;
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
      offset: number;
      paged: boolean;
      unpaged: boolean;
    };
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: boolean;
    size: number;
    number: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    numberOfElements: number;
    empty: boolean;
  };
  message: string | null;
}

export interface IFrameItem {
  value: string;
  label: string;
}

export interface IFilterItem {
  value: string;
  label: string;
  minLabel: string;
  maxLabel: string;
  min?: number;
  max?: number;
  used?: boolean;
}