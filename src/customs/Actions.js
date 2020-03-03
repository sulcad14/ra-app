import React from 'react';
import { CreateButton, TopToolbar } from 'react-admin';
import { linkToRecord } from 'ra-core';
import { EditButton } from 'ra-ui-materialui';

export class Actions extends React.Component
{
    getTabId(currentPath = "")
    {
        const urlParts = currentPath.split("/show/");
        return urlParts[1] || null;
    }

    createEditPath(basePath, record = { }, currentPath = "")
    {
        const link = linkToRecord(basePath, record.id);
        const tabId = this.getTabId(currentPath);
        return tabId
            ? `${link}/${tabId}`
            : link;
    }

    render()
    {
        const {
            hasCreate,
            hasEdit,
            bulkActions,
            basePath,
            displayedFilters,
            filters,
            filterValues,
            onUnselectItems,
            resource,
            selectedIds,
            showFilter,
            data,
            hasJson,
            currentPath,
            /*
            currentSort,
            total,
            exporter,
            */
        } = this.props;

        return <TopToolbar>
            {bulkActions && React.cloneElement(bulkActions, {
                basePath,
                filterValues,
                resource,
                selectedIds,
                onUnselectItems,
            })}
            {filters && React.cloneElement(filters, {
                resource,
                showFilter,
                displayedFilters,
                filterValues,
                context: 'button',
            }) }
            {hasCreate && <CreateButton basePath={basePath} resource={resource} />}
            {hasEdit && <EditButton basePath={basePath} record={data} to={this.createEditPath(basePath, data, currentPath)} />}
        </TopToolbar>;
    }
}
