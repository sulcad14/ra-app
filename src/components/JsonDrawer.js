import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import JsonInput from 'react-json-view';
import compose from 'recompose/compose';
import { Button } from 'react-admin';
import Drawer from '@material-ui/core/Drawer';
import EditIcon from '@material-ui/icons/Subject';
import SaveIcon from '@material-ui/icons/Save';
import IconKeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { refreshView } from 'ra-core'

const styles =
{
    divStyle: 
    {
        width: '400px',
        margin: '1em'
    },
    openButtonStyle: 
    {
        color: "#262626"
    }
};

const JsonDrawerBase = ({ source, record, input, data, resource }) => 
{
    /* define states */
    const [showPanel, setShowPanel] = useState(false);
    const [editData, setEditData] = useState(null);

    const handleOpenClick = () =>
    {
        setShowPanel(true);
        setEditData(data);
    }

    const handleCloseClick = () =>
    {
        setShowPanel(false);
    }

    const updateInputValue = (value) =>
    {
        const { updated_src } = value;
        setEditData(updated_src);
    };

    const handleSaveClick = async () => 
    {
        if (editData !== null) 
        {
            //await dataProvider.update(resource, { id: editData._id, data: editData, previousData: data });
            if (refreshView) refreshView();
            setShowPanel(false);
        }
    }



    return (
        <div>
            <Button label="custom.editJson" style={styles.openButtonStyle} onClick={() => handleOpenClick()}>
                <EditIcon />
            </Button>

            <Drawer anchor="right" open={showPanel} onClose={() => handleCloseClick()}>
                <div>
                    <Button onClick={() => handleCloseClick()} label="ra.action.close">
                        <IconKeyboardArrowRight />
                    </Button>
                </div>
                <div style={styles.divStyle}>
                    {editData && <JsonInput src={editData} name={null} displayDataTypes={false} displayObjectSize={false} 
                        onEdit={(v) => updateInputValue(v)} 
                        onAdd={(v) => updateInputValue(v)}
                        onDelete={(v) => updateInputValue(v)} 
                    />}
                    <br></br>
                    <Button onClick={() => handleSaveClick()} label="ra.action.save">
                        <SaveIcon />
                    </Button>
                </div>
            </Drawer>
        </div>  
    );
}

const enhance = compose(connect(null, { refreshView }));


export const JsonDrawer =  enhance(JsonDrawerBase);

