import Mock from 'mockjs'

const List = [];
const count = 20;

for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        id: '@id',
        name: '@ctitle(10, 20)',
        use_count: '@integer(0, 50)',
        question_count: '@integer(0, 50)',
        catid: '@integer(0, 500)',
        'upload_uid|1': ['', '@uuid'],
        'status|1': ['published', 'draft'],
        author: '@cname',
        display_time: '@datetime',
        pageviews: '@integer(300, 5000)'
    }));
}

export default {
    getList: () => List,
    getArticle: () => ({
        status: 200,
        statusText:'200 OK',
        data: {
            id: 120000000001,
            title: 'mock 测试标题',
            ptime: '2018-01-09 08:47:22',
            source: '北青网-北京青年报',
            img: [{ src:'http://cms-bucket.nosdn.127.net/catchpic/9/99/9929e266ca1ff47350a7dd2ff4ddd54b.jpg', alt:'', ref:'<!--IMG#0-->', pixel:'400*268'}],
            body:'<!--IMG#0--><p>　　小马奔腾创始人妻子金燕曾在非常时期当选小马奔腾董事长 供图/视觉中国</p><p>　　近日北京小马奔腾文化传媒股份有限公司原董事长遗孀金燕，被小马奔腾股东之一建银文化产业投资基金（天津）有限公司告上法庭，一审判决金燕负债2亿元。目前，金燕已向北京高院提起了上诉。</p><p>　　<b>事件</b></p><p>　　<b>法院一审判金燕承担2亿债务</b></p><p>　　市场将这桩案件称为婚姻法司法解释24条有史以来额度最大的案件。</p><p>　　李明的妻子金燕表示：“当年的&lsquo;对赌协议&rsquo;，我没有签字，巨额的投资款项，也没有用于夫妻共同生活，我甚至都没有持有过小马奔腾的股权，这一切为什么要我来承担？”丈夫离世后，生活急转直下。金燕表示，她在北京的两处房产已被查封，“现在我和女儿、妈妈一起租房子住。丈夫的遗产，实际上只有一百万。”面对生活的变故，金燕表示只能接受，但她从心理上无法接受一夜之间被负债高达数亿元的判决结果。</p><p>　　北京小马奔腾文化传媒股份有限公司当年红极一时，?更是资本圈竞相追捧的对象。然而，2014年1月2日，创始人李明突然离世。此前两天，正是李明与建银文化产业投资基金（天津）有限公司所签“对赌协议”到期的日子。小马奔腾由于没在2013年12月31日前成功上市，所以“对赌”失败了。</p><p>　　正是这份“对赌协议”产生的债务，建银投资公司将李明遗孀金燕告上法庭，北京市一中院近日作出判决：基于婚姻法司法解释（二）第24条之规定，金燕因夫妻共同债务要在2亿范围内承担连带清偿责任。根据24条规定，债权人就婚姻关系存续期间夫妻一方以个人名义所负债务主张权利的，应当按夫妻共同债务处理，所以遗孀金燕有责任偿还丈夫的2亿债务。</p><p>　　<b>对赌</b></p><p>　　<b>建银文化曾领投小马奔腾</b></p><p>　　小马奔腾的核心人物李明因心脏病离世后，就开始了挡不住的下坡路。时间节点在2014年1月2日。</p><p>　　与建银文化的股权纠纷要追溯到2011年。当年小马奔腾完成了上市前最后一轮融资，金额达7.5亿元。该笔融资由建银文化领投，信中利、开信创投等跟进，成为当时中国影视业最大一笔融资。</p><p>　　建银文化作为投资方，与李明等及其他相关主体签署了《关于北京新雷明顿广告有限公司的增资及转股协议》，约定建银文化以受让北京新雷明顿广告有限公司(该公司于2011年12月改制并更名小马奔腾)股权和直接增资两种方式成为小马奔腾股东，最终持股比例达到15%，入资额4.5亿元，成为小马奔腾的第二大股东，仅次于李明兄妹所组建的北京小马奔腾投资有限公司。</p><p>　　公开消息称，小马奔腾及作为实际控制人的李萍、李莉、李明与建银文化还签署了一份《投资补充协议》。其中约定：若小马奔腾未能在2013年12月31日之前实现合格上市，则投资方建银文化有权在2013年12月31日后的任何时间，要求其任何一方一次性收购建银文化所持有的小马奔腾的股权。同时还约定，建银文化要求其共同或者任一方收购的，应发出书面通知，其不得以任何理由拒绝履行收购义务，但其可以自身名义或其指定的第三方实施收购。</p><p>　　当时小马奔腾瞄上了文化传媒大发展的顺风车，着手准备上市事宜。一组数据可以看出行业的火爆，2014年A股涉及影视行业的并购事件为54件；2015年截至6月30日，上市公司中涉及影视行业并购事件已超过30件，平均一周一件并购案。</p><p>　　<b>分析</b></p><p>　　<b>小马奔腾“翻车”有必然因素</b></p><p>　　李明的离世让小马奔腾走上了下坡路：姑嫂相争、董事长出局、高管离职、编剧出走、投资者维权等。</p><p>　　李明过世当月27日，?他的遗孀金燕在非常时期当选小马奔腾董事长、总经理和法定代表人。她对外界表示，直到此时，才知晓有对赌协议的存在。金燕说，为了避免更坏的局面，此时的小马奔腾开始寻找新的战略投资者，但是，并没有取得成功。</p><p>　　2014年10月底，金燕被罢免董事长职务，小马奔腾董事长、法人代表，由李莉出任。金燕不在小马奔腾担任任何职务。</p><p>　　三年后，2017年10月，小马奔腾被公开拍卖，估值仅为3.8亿元，接盘者是冉腾（上海）投资咨询有限公司，在业界并不为人知晓。其创始人李明的姐姐、妹妹——李萍和李莉在两家公司中的股东身份，已被清除。</p><p>　　市场认为，自从李明为小马奔腾选择了高速发展路径时，公司创始团队和小马奔腾绑定资本路径，更像一个连环赌局。资深人士认为，灵魂人物的突然去世打乱了公司发展的步调，这是最主要的突发因素；也有不可忽视的必然因素，譬如家族式的商业结构特点过于明显、股权不清晰、董事会掌舵人的内斗，以及引进资本的对赌过于激进。在团队建设的制度方面又过于保守，对核心人才没有股权激励，也导致后来人才的流失、业务停滞。</p><p>　　作者：刘慎良</p><p>原标题：2亿巨额债务“为什么要我承担”</p>'
        }
    })
}