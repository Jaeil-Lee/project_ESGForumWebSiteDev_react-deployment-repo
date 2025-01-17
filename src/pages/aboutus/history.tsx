import { useEffect, useState } from 'react';
import { Content, DesContent } from '../../components/aboutus/DesContent';
import { HistoryComponent } from '../../components/aboutus/HisConent';
import { Body, ContentContainer } from '../../components/aboutus/Layout';
import PageTitle from '../../components/aboutus/PageTitle';
import SubNav from '../../components/layout/subnav';
import { History } from '../../types/aboutus.interface';
import { getHistories } from '../../services/aboutus.service';

const HistoryPage = () => {
  const [histories, setHistories] = useState<History[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getHistories();
      setHistories(data);
    })();
  }, []);

  return (
    <Body>
      <PageTitle background="#ADCF9F">연혁</PageTitle>
      <SubNav />
      <ContentContainer>
        <DesContent>
          <h2>연혁</h2>
          <h3>대학ESG실천포럼의 발자취</h3>
          <Content>
            <HistoryComponent data={histories} />
          </Content>
        </DesContent>
      </ContentContainer>
    </Body>
  );
};

export default HistoryPage;
