// Type definitions for ag-grid v15.0.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { RowNode } from "../entities/rowNode";
import { Column } from "../entities/column";
export declare class ValueService {
    private gridOptionsWrapper;
    private expressionService;
    private columnController;
    private eventService;
    private valueCache;
    private cellExpressions;
    private initialised;
    init(): void;
    getValue(column: Column, rowNode: RowNode, ignoreAggData?: boolean): any;
    setValue(rowNode: RowNode, colKey: string | Column, newValue: any): void;
    private setValueUsingField(data, field, newValue, isFieldContainsDots);
    private executeValueGetter(valueGetter, data, column, rowNode);
    private getValueCallback(node, field);
    getKeyForNode(col: Column, rowNode: RowNode): any;
}
