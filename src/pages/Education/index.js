import React, { useEffect } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import { Typography, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import ituLogo from '../../assests/itu.png';
import AspireLogo from '../../assests/Aspire_College.png';
import SGSLogo from '../../assests/SGS.png';
import styles from './Education.module.css';

const Education = () => {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    // Update the page title when the Education page is loaded
    setPageTitle('Education - My Portfolio');
  }, [setPageTitle]);

  return (
    <div className={styles.container}>
      <Typography variant="h4" className={styles.pageTitle}>
        <SchoolIcon style={{ marginRight: '8px' }} />
        
   <strong>Education</strong> {/* Wrap "Education" in a <strong> tag */}
      </Typography>

      <div className={styles.tableContainer}>
        <table className={styles.educationTable}>
          <thead>
            <tr>
              <th>Institution</th>
              <th>Degree</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Box display="flex" alignItems="center">
                  <img
                    src={SGSLogo}
                    alt="SGS Logo"
                    style={{ height: '30px', marginRight: '10px' }}
                  />
                  Sialkot Grammer School
                </Box>
                <Box display="flex" alignItems="center">
                  <a
                    href="https://www.facebook.com/SialkotGrammarSchoolOFFICIAL/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#90caf9' }}
                  >
                    Visit Website
                  </a>
                </Box>
              </td>
              <td>Matriculation</td>
              <td>2020</td>
            </tr>
            <tr>
              <td>
                <Box display="flex" alignItems="center">
                  <img
                    src={AspireLogo}
                    alt="Aspire College Logo"
                    style={{ height: '30px', marginRight: '10px' }}
                  />
                  Aspire College for Women smb
                </Box>
                <Box display="flex" alignItems="center">
                  <a
                    href="https://aspirecolleges.edu.pk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#90caf9' }}
                  >
                    Visit Website
                  </a>
                </Box>
              </td>
              <td>Intermediate</td>
              <td>2021–2022</td>
            </tr>
            <tr>
              <td>
                <Box display="flex" alignItems="center">
                  <img
                    src={ituLogo}
                    alt="ITU Logo"
                    style={{ height: '30px', marginRight: '10px' }}
                  />
                  Information Technology University
                </Box>
                <Box display="flex" alignItems="center">
                  <a
                    href="https://itu.edu.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#90caf9' }}
                  >
                    Visit Website
                  </a>
                </Box>
              </td>
              <td>Bachelor in CS</td>
              <td>2023–2027</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Education;
