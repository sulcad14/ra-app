import React from 'react';
import { CreateButton, TopToolbar } from 'react-admin';
import { linkToRecord } from 'ra-core';
import { EditButton } from 'ra-ui-materialui';
import { JsonDrawer } from '../components';
import { Models } from '../models';

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
            currentPath,
            /*
            currentSort,
            total,
            exporter,
            */
        } = this.props;

        const hasJson = Models[resource].hasOwnProperty('hasJson');
  
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
            {hasCreate && <CreateButton style={{ color: '#262626' }} basePath={basePath} resource={resource} />}
            {hasEdit && <EditButton style={{ color: '#262626' }} basePath={basePath} record={data} to={this.createEditPath(basePath, data, currentPath)} />}
            {hasJson && hasEdit && <JsonDrawer resource={resource} data={data} /> }
        </TopToolbar>;
    }
}
