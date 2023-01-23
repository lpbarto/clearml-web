/**
 * reports
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 999.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { ReportStatusEnum } from '././reportStatusEnum';
import { MultiFieldPatternData } from '././multiFieldPatternData';


export interface ReportsGetAllExRequest {
    /**
     * List of IDs to filter by
     */
    id?: Array<string>;
    /**
     * Get only reports whose name matches this pattern (python regular expression   syntax)
     */
    name?: string;
    /**
     * List of user IDs used to filter results by the reports\'s creating user
     */
    user?: Array<string>;
    /**
     * Page number, returns a specific page out of the resulting list of reports
     */
    page?: number;
    /**
     * Page size, specifies the number of results returned in each page (last page may   contain fewer results)
     */
    page_size?: number;
    /**
     * List of field names to order by. When search_text is used, \'@text_score\' can be   used as a field representing the text score of returned documents. Use \'-\'   prefix to specify descending order. Optional, recommended when using page
     */
    order_by?: Array<string>;
    /**
     * List of report user-defined tags. Use \'-\' prefix to exclude tags
     */
    tags?: Array<string>;
    /**
     * List of report system tags. Use \'-\' prefix to exclude system tags
     */
    system_tags?: Array<string>;
    /**
     * List of report status.
     */
    status?: Array<ReportStatusEnum>;
    /**
     * List of project IDs
     */
    project?: Array<string>;
    /**
     * List of report field names (nesting is supported using \'.\'). If provided, this   list defines the query\'s projection (only these fields will be returned for   each result entry)
     */
    only_fields?: Array<string>;
    /**
     * List of status changed constraint strings (utcformat, epoch) with an optional   prefix modifier (>, >=, <, <=)
     */
    status_changed?: Array<string>;
    /**
     * Free text search query
     */
    search_text?: string;
    /**
     * Scroll ID returned from the previos calls to get_all
     */
    scroll_id?: string;
    /**
     * If set then all the data received with this scroll will be requeried
     */
    refresh_scroll?: boolean;
    /**
     * The number of tasks to retrieve
     */
    size?: number;
    _all_?: MultiFieldPatternData;
    _any_?: MultiFieldPatternData;
}