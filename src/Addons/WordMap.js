
import React from 'react';

import { Box, Text, WorldMap } from 'grommet';


const placeProps = (name, color, showDrop) => ({
      name,
      color,
      ...(showDrop
        ? {
            content: (
              <Box pad={{ horizontal: 'small', vertical: 'xsmall' }}>
                <Text>{name}</Text>
              </Box>
            ),
            dropProps: {
              align: { left: 'right' },
              background: { color, opacity: 'strong' },
              elevation: 'medium',
              margin: { left: 'small' },
              round: 'xsmall',
            },
          }
        : {}),
    });
    
    export const Places = () => {
       const  showDrops= true
      return (
        <Box className='map' align="center" pad="large">
          
          <WorldMap
            places={[
              {
                location: [18.8830555556, 77.216666667],
                ...placeProps('Bengaluru, India', 'graph-2', showDrops),
              }
              
            ]}

            continents={[
                          {
                            name: 'Asia',
                            color: 'graph-1',
                            
                          },
                          {
                            name: 'Africa',
                            color: 'graph-2',
                            
                          },
                          {
                            name: 'Europe',
                            color: 'graph-3',
                            
                          },
                          {
                            name: 'Australia',
                            color: 'graph-2',
                            
                          },
                          {
                            name: 'North America',
                            color: 'graph-2',
                            
                          },
                          {
                            name: 'South America',
                            color: 'graph-1',
                            
                          },
                         
                        ]}
          />

        </Box>
      );
    };
    
    