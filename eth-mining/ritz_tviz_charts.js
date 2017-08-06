function ritz_tviz_charts() {
    var Q = 'bootstrap',
        R = 'begin',
        S = 'gwt.codesvr.ritz_tviz_charts=',
        T = 'gwt.codesvr=',
        U = 'ritz_tviz_charts',
        V = 'startup',
        W = 'DUMMY',
        X = 0,
        Y = 1,
        Z = 'iframe',
        $ = 'position:absolute; width:0; height:0; border:none; left: -1000px;',
        _ = ' top: -1000px;',
        ab = 'CSS1Compat',
        bb = '<!doctype html>',
        cb = '',
        db = '<html><head><\/head><body><\/body><\/html>',
        eb = 'undefined',
        fb = 'readystatechange',
        gb = 10,
        hb = 'Chrome',
        ib = 'eval("',
        jb = '");',
        kb = 'script',
        lb = 'javascript',
        mb = 'moduleStartup',
        nb = 'moduleRequested',
        ob = 'Failed to load ',
        pb = 'head',
        qb = 'meta',
        rb = 'name',
        sb = 'ritz_tviz_charts::',
        tb = '::',
        ub = 'gwt:property',
        vb = 'content',
        wb = '=',
        xb = 'gwt:onPropertyErrorFn',
        yb = 'Bad handler "',
        zb = '" for "gwt:onPropertyErrorFn"',
        Ab = 'gwt:onLoadErrorFn',
        Bb = '" for "gwt:onLoadErrorFn"',
        Cb = '#',
        Db = '?',
        Eb = '/',
        Fb = 'img',
        Gb = 'clear.cache.gif',
        Hb = 'baseUrl',
        Ib = 'ritz_tviz_charts.nocache.js',
        Jb = 'base',
        Kb = '//',
        Lb = 'locale',
        Mb = 'en_US',
        Nb = 'locale=',
        Ob = 7,
        Pb = '&',
        Qb = '__gwt_Locale',
        Rb = '_',
        Sb = 'Unexpected exception in locale detection, using default: ',
        Tb = 2,
        Ub = 3,
        Vb = 4,
        Wb = 5,
        Xb = 6,
        Yb = 8,
        Zb = 9,
        $b = 11,
        _b = 12,
        ac = 13,
        bc = 14,
        cc = 15,
        dc = 16,
        ec = 17,
        fc = 18,
        gc = 19,
        hc = 20,
        ic = 21,
        jc = 22,
        kc = 23,
        lc = 24,
        mc = 25,
        nc = 26,
        oc = 27,
        pc = 28,
        qc = 29,
        rc = 30,
        sc = 31,
        tc = 32,
        uc = 33,
        vc = 34,
        wc = 35,
        xc = 36,
        yc = 37,
        zc = 38,
        Ac = 39,
        Bc = 40,
        Cc = 41,
        Dc = 42,
        Ec = 43,
        Fc = 44,
        Gc = 45,
        Hc = 46,
        Ic = 47,
        Jc = 48,
        Kc = 49,
        Lc = 50,
        Mc = 51,
        Nc = 52,
        Oc = 53,
        Pc = 54,
        Qc = 55,
        Rc = 56,
        Sc = 57,
        Tc = 58,
        Uc = 59,
        Vc = 60,
        Wc = 61,
        Xc = 62,
        Yc = 63,
        Zc = 64,
        $c = 65,
        _c = 66,
        ad = 67,
        bd = 68,
        cd = 69,
        dd = 70,
        ed = 71,
        fd = 'user.agent',
        gd = 'webkit',
        hd = 'safari',
        jd = 'msie',
        kd = 'ie10',
        ld = 'ie9',
        md = 'ie8',
        nd = 'gecko',
        od = 'gecko1_8',
        pd = 'selectingPermutation',
        qd = 'ritz_tviz_charts.devmode.js',
        rd = 'sk_SK',
        sd = '01C0871BF43FBCFD7BCE05626CAD7E5F',
        td = 'pt_BR',
        ud = '03BF46DDC4CCBD94F439E416D538D0DA',
        vd = 'pt_PT',
        wd = ':1',
        xd = 'bn_IN',
        yd = '04041906A8BC8779ED28303E6041DBF5',
        zd = 'hi_IN',
        Ad = 'sv_SE',
        Bd = '0433237A490C28B10827B37F2F89723C',
        Cd = 'bg_BG',
        Dd = '0560415EB5C80742AA4FC9C6BA17ADB8',
        Ed = 'hr_HR',
        Fd = 'en_CA',
        Gd = '068B2305029269CDFCF615AB2E57FBB8',
        Hd = 'fil_PH',
        Id = '0779447B790DF82B6F18D1745C4B097D',
        Jd = '082EFEF711E63D41295259B190243249',
        Kd = 'mn_MN',
        Ld = '09BB0CF51060460F16A10698F5499CFA',
        Md = '0B9C1CBDFCE794AF85CB53FB5C394872',
        Nd = 'en_AU',
        Od = '0C0A75415E18A3FEA4984B0ED1D56CE8',
        Pd = 'gu_IN',
        Qd = '0C330D4B3402BA93ED39A2E3D1971538',
        Rd = 'kn_IN',
        Sd = 'zh_CN',
        Td = '0C929F4C5EAC68CD8F13BEA8622209BF',
        Ud = 'zh_HK',
        Vd = '0CCF53ED63B72C32070ED8257FA147ED',
        Wd = 'uk_UA',
        Xd = '0D01A514E7460610C596C136C26D5428',
        Yd = 'in_ID',
        Zd = '0EEE2AB5F267299728B8C3B7A8709B55',
        $d = 'lt_LT',
        _d = '0F0AF40CB413078B6E352997C4CC77B1',
        ae = 'ru_RU',
        be = '1020A9C6C03D260B315A379A65D9E8CC',
        ce = 'ro_RO',
        de = '11222B5D35D64955E23AA8D145EDA0DC',
        ee = 'hy_AM',
        fe = '123DB0AE344A4AA2994B19C591D23751',
        ge = '12A2883E6204A32B4BA12F52CB3CDBB3',
        he = 'no_NO',
        ie = '1583ED8856B7E5BD9D067695A6301A70',
        je = 'th_TH',
        ke = '1A895F563821B2EE3B8C65863E68EC02',
        le = '2079BD3415AF4534AEB09BB9D5A6A5D4',
        me = '2103AAA5A0349688C68D8FB64E83FAC3',
        ne = 'it_IT',
        oe = '23B99E06BC311178932FA6EA56FE1F1B',
        pe = 'vi_VN',
        qe = '2533F9535EFE51574C907201B828C946',
        re = '26FF5AF5F683FAC9FB6271DAB456E06D',
        se = 'cs_CZ',
        te = '28039FB42E0BF2D43968ABCDB43F8B47',
        ue = '293FD5B2E3DA9D9BDB4AC5FCC19E695E',
        ve = 'ka_GE',
        we = '2A8C6A941B33D0596E170E82D9D9C5F9',
        xe = 'nl_NL',
        ye = '2C755D1D093A1DDBFFCDEE6D38E5252A',
        ze = 'az_AZ',
        Ae = '2DA5BF259C917C8486BA779079690F27',
        Be = '2FB64BAC14B2D5C4FE4800845C01DCB5',
        Ce = '304BA4BE2EB1DDD4A381752E72B05984',
        De = 'sl_SI',
        Ee = '32E9A5BEDBB0EDE4127EA6B1C6AE8773',
        Fe = 'fi_FI',
        Ge = '3562CEAE94D4E5A03B669A605EEE599A',
        He = 'ta_IN',
        Ie = '365B0C0885080BD6648E6C06E3155990',
        Je = 'te_IN',
        Ke = '379435232C71BC599AE38B76331E8C3E',
        Le = 'es_UY',
        Me = '379F3C6257DE0F6C223179412E033FC4',
        Ne = 'es_VE',
        Oe = '3A13B0CCD43CF8CFB675C0FFA49A0F1F',
        Pe = 'en_GB',
        Qe = '3BB522651A0BBD6843A4C5EABADA55B3',
        Re = 'el_GR',
        Se = '3E1274D2B562C4A1ED64CB03F5FEE867',
        Te = 'ar_EG',
        Ue = '3EF01715574582F8EAAD51381F30E89B',
        Ve = 'de_CH',
        We = '40E9FAD7CA2A5E87E36C5AFE15785F66',
        Xe = 'de_DE',
        Ye = 'es_CL',
        Ze = '416605D705F458079423B72D52B21C49',
        $e = 'es_CO',
        _e = '426004685E791F9C4D49AA7789B83E71',
        af = 'en_IE',
        bf = '4526E30B910188E51DC5B431D5F79225',
        cf = '45948869A42CC7A7554E3E702464C3DB',
        df = '4685B33F838348D5210E4463D763BD06',
        ef = '47BB1001E61628E1E8DABD5B56D5CE85',
        ff = 'ja_JP',
        gf = '48C7F873BCE60A0FDE4ECB5D8EE0371B',
        hf = '49F8C37000305DC2E1967FAD5F0DB0FA',
        jf = '4AA991CF8D9D578988B151599697375F',
        kf = 'da_DK',
        lf = '4B75647658A37F06CE600B5557471C54',
        mf = 'iw_IL',
        nf = '4C09FE376559A9BF87A4FD906E13ABD2',
        of = 'es_AR',
        pf = '4CDE971FE577CB514E21C2A6EBB7FA20',
        qf = 'es_BO',
        rf = '4CE5C324F92CA85B077878995D063995',
        sf = '4D9F2FBD4C83101B118A9244917D1D81',
        tf = 'be_BY',
        uf = '4FA9DFD78CAC9119ADD9AB79F5ED5C6D',
        vf = 'ml_IN',
        wf = '510A4DEFD85AD1612BB49520F2FE2898',
        xf = 'mr_IN',
        yf = '5484A229067B73490BFE5D7ABF909C13',
        zf = 'es_EC',
        Af = '55EEC820304B5334427BEADE799EEE0B',
        Bf = 'es_PY',
        Cf = '579F550CE3857878826E099E9614862C',
        Df = '57A6F2F6C8DC4CD48CB7B6C47DB50C10',
        Ef = 'default',
        Ff = '57B96BF118465EAA60E497614DDE7445',
        Gf = 'lv_LV',
        Hf = '59BDF452CA89F47538F86DCDEE0959C6',
        If = 'tr_TR',
        Jf = '5E6197BC89167CA44AF97F3658CDDC7D',
        Kf = 'ca_ES',
        Lf = '5EDA13627B3D7FA0811F811C87DC9C6C',
        Mf = 'es_ES',
        Nf = '5EF467C7CC85D7D1657E00E361C8EA73',
        Of = 'es_MX',
        Pf = '5F3111B2B0616DD5F837753EEEA26B7A',
        Qf = '607CF1F04A1F095BBCDE62A887FC259F',
        Rf = '60E222942926999A54E9F81A927A1F5F',
        Sf = '6336532BD9BF61C6E782465F6A0B9D83',
        Tf = '64BEC070B9D2E8FBA31CE8AF663F8D61',
        Uf = '650BFB5FAE773FC7895B33363B99A2F2',
        Vf = '655D19DB919D97AC94E7568B6EFCAEB8',
        Wf = '65AF20AA39D3EA30D690978F9D69530C',
        Xf = '664BA5EF1A7F0833DB7C47CD7C45D80A',
        Yf = 'kk_KZ',
        Zf = '665E25958503BB8D44FB716E52DB2D04',
        $f = '6686438BD433ED357F8E7C7AD0B0A2A2',
        _f = '678B52CDEA5DC7A0B7534CA06B9F0079',
        ag = '6AB3ECCB09C2757D69397A32E59DE97F',
        bg = '6B1D7C044DE5D148343BC3A318246DAA',
        cg = '6B3D9EFDA64D2E718993540BC068E5C2',
        dg = 'fr_CA',
        eg = '6B8927E7847EFA544629838B334A7138',
        fg = 'fr_FR',
        gg = '6EF4622DFD1889A6AEA9EFD48B3FE77A',
        hg = 'nn_NO',
        ig = '6FD9D91C13C2E5F73DB7B6EA5F0458AC',
        jg = '6FFFBC6FF53BBCEDD631CDE055945B45',
        kg = 'sr_RS',
        lg = '7086A9B765CCE60064DC489B0FF53C94',
        mg = '70C441E4FB510730C6A40E86DE571215',
        ng = '7143BCE459228954E9A4759739A0403B',
        og = 'ko_KR',
        pg = '71DD91386373CE00F92DAC23B429F31F',
        qg = 'or_IN',
        rg = '721D9DF13EB0BBB5E3FBE188929B8CCA',
        sg = 'pa_IN',
        tg = 'zh_TW',
        ug = '72843454412158E749E7779A252FB192',
        vg = '72D881EB7C3269510B59774C5BAE0930',
        wg = 'pl_PL',
        xg = '73FB1C59D4DD5A03A49FB0DF1C118F16',
        yg = '773C80B847A8D2FA2E3916807AD8F1A2',
        zg = '7812931968D855EDC467C130F67FF796',
        Ag = '7913D9337BC52E7BA0390ABAF9452BFC',
        Bg = '7ADE9D2EDF80373DAA80CA5330FD9351',
        Cg = '7C31F7D99D7AFDDC254C391257976074',
        Dg = '7C6C6C005AF23D2670B0505E798325C2',
        Eg = 'hu_HU',
        Fg = '7D46CCF2344020CD260F8CFD42943A6D',
        Gg = '7EB40C1C09EA7C98C425EACF594E4B02',
        Hg = '7F2F7418AE45907E8B1419A2F113C953',
        Ig = '7F456EEAA96F005A3291576512383082',
        Jg = '81632642BEAD17B622AE7F77FFF3FAA1',
        Kg = '81993B6A1BDE526D3083DD17FEFE2FF7',
        Lg = '8271947077060E207CBB5C21E3E59CA4',
        Mg = '844E27401EEA51D88C02F828B52DD969',
        Ng = '850D58DEA1B92774F1B650C71D4999D9',
        Og = '85279986EB9C7B31B32A387C70E9711F',
        Pg = '855AE3CF8D8404C97F0B0CFEA2583302',
        Qg = '85AEE97369439292D95D3067C6515BC6',
        Rg = '8665A642D71C297B18E8C352484057DE',
        Sg = '8792D604397CBFB47E377284B1C897BE',
        Tg = '87DE92A5124C7F5E9D3C75AA2C49DE4F',
        Ug = '8841F4B0422A3176D17B439C734397C0',
        Vg = '8ACF4813B67F17AAA62FF2785C43D9F0',
        Wg = '8ADB33A7B13E485A8385A18AF748E5B0',
        Xg = '8B52A0EF98AA440DA7095A5A9CF12674',
        Yg = '8B9D0F437844FB4715A63B6487A9126C',
        Zg = '8C556BA7CF08847A2A8AA432BEBD7D25',
        $g = '8E579E785160AB1F8AE38C2C221E5D0D',
        _g = '8ED46F8F906EE340DB333557E8EA4464',
        ah = '8EDF66C0083F5515130A0E578C845AA0',
        bh = '8F0560FFC4F33AFD093F6CA75B66EBD5',
        dh = '906934C72563B5D17726AE0CADE9FFC8',
        eh = '917B75E4EAB179CE1C75285B600E8D4C',
        fh = '919EF0255A4FC9C009280EC847B45292',
        gh = '9505157F0DD78DD1084571B23E040869',
        hh = '95321556859826DD0DE3BFEBC08F21D7',
        ih = '9644D9452957B1D45D6712AF30B8AD73',
        jh = '97F9B890EC0DBF7BDBF9725C366A8C9C',
        kh = '99561ADFE3105D1C825412FDEA71786A',
        lh = '99F0A66B4E4786FF20A0052814FDC919',
        mh = '99F46FDC270A9E51D48B68CBC0EC01C6',
        nh = '9AA797846AC6B3BC0A2A3417666B56FC',
        oh = '9B1166085E28AB4F53EBB4EADA171EB1',
        ph = '9B3F86ED116083B71617ECE34EC9AF77',
        qh = '9D571E4D4BA5AFFFFD3493C103E01E9F',
        rh = '9DA8F06A65B22D56038B87AFB2046234',
        sh = '9F0425CF237B3AC3CBD4D5892A510FE9',
        th = 'A0C6CC4F595B41F8A7336B44DE4A2F55',
        uh = 'A0D820CD203A574BB7F57CA35FBAEC4B',
        vh = 'A2EF5A168BBF484E9281629646505CD0',
        wh = 'A32273A3270923FA8A60DFECC8952FDC',
        xh = 'A3E5EF3211DF855453E8E80572779C70',
        yh = 'A44EEBBD5848F176DFE441BD44A8B246',
        zh = 'A46D3F7596D2F8AC3E9367965BE27CD9',
        Ah = 'A53C84398F408C241F0E25003109144A',
        Bh = 'A59D64123B6DFCDD814C4ED7A1A667D1',
        Ch = 'A5B1100A2E69BA4E5BE9F1059AB92C57',
        Dh = 'A601C05A147CDEB38419446D6EA570AC',
        Eh = 'A89F68EE9BEBF48D3012A412CC7DAF13',
        Fh = 'A9ACF92D0D15F6AC1891072301B102CC',
        Gh = 'A9E3F0E8CAF77BB77391DD07BCF72DD1',
        Hh = 'AA0FCDD8D0118670003D952DF383D4F7',
        Ih = 'AA1A8ED202CB9BD9B819619302E5DD33',
        Jh = 'AB699D54D07EB5DE4D7AEA01944C2516',
        Kh = 'ACC7377D0DC52765DE98EDCC6A8F4BA7',
        Lh = 'AE12AC7A3F229A55D7386F30DD88BB2A',
        Mh = 'AE7B11CFA717BCC4C139046B13DDAAD1',
        Nh = 'B0DE4E3293B24D93A8B5BDE836EF771A',
        Oh = 'B3872B1AB57D3007F4D3401410EB9270',
        Ph = 'B4C22C5A5337B4DF0E186FE380125D32',
        Qh = 'B5B5A18E9961805988825824D634BDC6',
        Rh = 'B9B44B151FB56A5925CF230431407495',
        Sh = 'B9CD2EF917F798F65BAED723EDBD76E0',
        Th = 'BA69F365C5D2E607F2CA337390318011',
        Uh = 'BAE67E50C742900ED5FA08DA5F4755CD',
        Vh = 'BC684979455688FED4968A0683536799',
        Wh = 'BF51AFCBACC662DDFC6B59D907B69AAC',
        Xh = 'C050B4C06CA0D6EB2B909B7D5D0DDC5E',
        Yh = 'C46058035E2B9F9B2D5563D4FE30A62E',
        Zh = 'C65FA23683C33E67D5ACC1928A26DF47',
        $h = 'C6E8D8389D66912029DD65424030F025',
        _h = 'C725F5FCDAE6C693449F417A8B55A3FE',
        ai = 'C7AEBC2FFC55B70752A9AC086278D5DA',
        bi = 'C802AE2A28DC395CD4AD733FD5307BF4',
        ci = 'C8A6B612EDDB09DC71421832F61773B7',
        di = 'CAC2449B793EB1590C5074FAD8CAD596',
        ei = 'CB0AD87D65F550FE391D9440A1614FC6',
        fi = 'CF474724282F80BD3D93875FFBEB8FAB',
        gi = 'CFA79E882FB7987956178072C78AEB06',
        hi = 'D13F9447643F90AA4AF040DD7D906C2E',
        ii = 'D19BD5FE287ECFDE6ED5A4BA689F8A39',
        ji = 'D41848361971C6D2313553733149FC69',
        ki = 'D47A774192EB0EC6990923E7FBCAE0C6',
        li = 'D7571B4AB18563848206D92CF1E61B66',
        mi = 'D8FD5561CA64C5B4A692244C1055B79F',
        ni = 'DAA4434A463FD76D12AAE1F08F6D2E77',
        oi = 'DAB34A665270AC6D1F09DD2F66B06A43',
        pi = 'DB11C8F41C982D0700385B6DE3E9B847',
        qi = 'DCF62481C4B2D78B57C8EECAFBB29400',
        ri = 'E0A69347CE66C1EBD88331F5C7C74B35',
        si = 'E0C6F641C5BB7AA01176F827AD88E5E0',
        ti = 'E2B164D9705BC945CED8C5FEEBEBFB62',
        ui = 'E2CAF7FB2BF9F2A96D008BFAC4B99184',
        vi = 'E33488742AD58AE92EA990AF51B9D8B0',
        wi = 'E40559A0EFE83D898988F8AC4F8FD36C',
        xi = 'E530D8D58A2084EC495AC60E638B8E06',
        yi = 'E70A14E9D6D0CF82FBA086B6F63EECDD',
        zi = 'E83F35D8E0786D5A4BB425832DF8C2F4',
        Ai = 'EAB90E892F7489040153323BE0E35E4B',
        Bi = 'EE99165809BA4B74CA76AED21A94F8DB',
        Ci = 'F1CF8EA3E1BD95AEAB8F1CA4A6E2E4E7',
        Di = 'F273930A9F25202A3E64954A2C32A83F',
        Ei = 'F2978DEAFBF9DC64D616183020F3C2AB',
        Fi = 'F2A39E27E78AA02DC200FE405614ADAE',
        Gi = 'F4D4A372369A72B05AC0D80A6E8887AE',
        Hi = 'F4DB4B5C1FA7A41E05DA7748905C2A55',
        Ii = 'F5AF84E898183EDE23D08BA8E459EBC7',
        Ji = 'F7E70DFF2F89193849A3A5DED0639DEE',
        Ki = 'F80CC54D18758681DAE2941B1072D296',
        Li = 'F8806491AEE668279AE637BBCAECBDB8',
        Mi = 'F97BDF80A043B93732F605233CE1A424',
        Ni = 'FA39BF185C01DEDDD8D5135CEFFFE28B',
        Oi = 'FA6924B95DF66DC4D4170E5B967A96D4',
        Pi = 'FAB75F3DFC2C3A0FAE17F4CCA2EA5936',
        Qi = 'FBB0C3C3626653446526A365C09278EA',
        Ri = 'FD1CBBE938A93D8A75E805CEF133B684',
        Si = 'FDF05B082D75C9EABD3433FA29468AFC',
        Ti = 'FDFE8EFFFA6C6276E3214B976FB10EF5',
        Ui = 'FE4BCF16C3729C78E494CF4E268D8FF0',
        Vi = 'FE8E750D01BF0052418B6D7E912A8078',
        Wi = 'FF9DF4AFED34D5A5A887ACAF643E71B3',
        Xi = ':',
        Yi = '.cache.js',
        Zi = 'loadExternalRefs',
        $i = 'end',
        _i = 'http:',
        aj = 'file:',
        bj = '_gwt_dummy_',
        cj = '__gwtDevModeHook:ritz_tviz_charts',
        dj = 'Ignoring non-whitelisted Dev Mode URL: ',
        ej = ':moduleBase';
    var q = window;
    var r = document;
    t(Q, R);

    function s() {
        var a = q.location.search;
        return a.indexOf(S) != -1 || a.indexOf(T) != -1
    }

    function t(a, b) {
        if (q.__gwtStatsEvent) {
            q.__gwtStatsEvent({
                moduleName: U,
                sessionId: q.__gwtStatsSessionId,
                subSystem: V,
                evtGroup: a,
                millis: (new Date).getTime(),
                type: b
            })
        }
    }
    ritz_tviz_charts.__sendStats = t;
    ritz_tviz_charts.__moduleName = U;
    ritz_tviz_charts.__errFn = null;
    ritz_tviz_charts.__moduleBase = W;
    ritz_tviz_charts.__softPermutationId = X;
    ritz_tviz_charts.__computePropValue = null;
    ritz_tviz_charts.__getPropMap = null;
    ritz_tviz_charts.__installRunAsyncCode = function () {};
    ritz_tviz_charts.__gwtStartLoadingFragment = function () {
        return null
    };
    ritz_tviz_charts.__gwt_isKnownPropertyValue = function () {
        return false
    };
    ritz_tviz_charts.__gwt_getMetaProperty = function () {
        return null
    };
    var u = null;
    var v = q.__gwt_activeModules = q.__gwt_activeModules || {};
    v[U] = {
        moduleName: U
    };
    ritz_tviz_charts.__moduleStartupDone = function (e) {
        var f = v[U].bindings;
        v[U].bindings = function () {
            var a = f ? f() : {};
            var b = e[ritz_tviz_charts.__softPermutationId];
            for (var c = X; c < b.length; c++) {
                var d = b[c];
                a[d[X]] = d[Y]
            }
            return a
        }
    };
    var w;

    function A() {
        B();
        return w
    }

    function B() {
        if (w) {
            return
        }
        var a = r.createElement(Z);
        a.id = U;
        a.style.cssText = $ + _;
        a.tabIndex = -1;
        r.body.appendChild(a);
        w = a.contentWindow.document;
        w.open();
        var b = document.compatMode == ab ? bb : cb;
        w.write(b + db);
        w.close()
    }

    function C(k) {
        function l(a) {
            function b() {
                if (typeof r.readyState == eb) {
                    return typeof r.body != eb && r.body != null
                }
                return /loaded|complete/.test(r.readyState)
            }
            var c = b();
            if (c) {
                a();
                return
            }

            function d() {
                if (!c) {
                    if (!b()) {
                        return
                    }
                    c = true;
                    a();
                    if (r.removeEventListener) {
                        r.removeEventListener(fb, d, false)
                    }
                    if (e) {
                        clearInterval(e)
                    }
                }
            }
            if (r.addEventListener) {
                r.addEventListener(fb, d, false)
            }
            var e = setInterval(function () {
                d()
            }, gb)
        }

        function m(c) {
            function d(a, b) {
                a.removeChild(b)
            }
            var e = A();
            var f = e.body;
            var g;
            if (navigator.userAgent.indexOf(hb) > -1 && window.JSON) {
                var h = e.createDocumentFragment();
                h.appendChild(e.createTextNode(ib));
                for (var i = X; i < c.length; i++) {
                    var j = window.JSON.stringify(c[i]);
                    h.appendChild(e.createTextNode(j.substring(Y, j.length - Y)))
                }
                h.appendChild(e.createTextNode(jb));
                g = e.createElement(kb);
                g.language = lb;
                g.appendChild(h);
                f.appendChild(g);
                d(f, g)
            } else {
                for (var i = X; i < c.length; i++) {
                    g = e.createElement(kb);
                    g.language = lb;
                    g.text = c[i];
                    f.appendChild(g);
                    d(f, g)
                }
            }
        }
        ritz_tviz_charts.onScriptDownloaded = function (a) {
            l(function () {
                m(a)
            })
        };
        t(mb, nb);
        var n = r.createElement(kb);
        n.src = k;
        if (ritz_tviz_charts.__errFn) {
            n.onerror = function () {
                ritz_tviz_charts.__errFn(U, new Error(ob + code))
            }
        }
        r.getElementsByTagName(pb)[X].appendChild(n)
    }
    ritz_tviz_charts.__startLoadingFragment = function (a) {
        return G(a)
    };
    ritz_tviz_charts.__installRunAsyncCode = function (a) {
        var b = A();
        var c = b.body;
        var d = b.createElement(kb);
        d.language = lb;
        d.text = a;
        c.appendChild(d);
        c.removeChild(d)
    };

    function D() {
        var c = {};
        var d;
        var e;
        var f = r.getElementsByTagName(qb);
        for (var g = X, h = f.length; g < h; ++g) {
            var i = f[g],
                j = i.getAttribute(rb),
                k;
            if (j) {
                j = j.replace(sb, cb);
                if (j.indexOf(tb) >= X) {
                    continue
                }
                if (j == ub) {
                    k = i.getAttribute(vb);
                    if (k) {
                        var l, m = k.indexOf(wb);
                        if (m >= X) {
                            j = k.substring(X, m);
                            l = k.substring(m + Y)
                        } else {
                            j = k;
                            l = cb
                        }
                        c[j] = l
                    }
                } else if (j == xb) {
                    k = i.getAttribute(vb);
                    if (k) {
                        try {
                            d = eval(k)
                        } catch (a) {
                            alert(yb + k + zb)
                        }
                    }
                } else if (j == Ab) {
                    k = i.getAttribute(vb);
                    if (k) {
                        try {
                            e = eval(k)
                        } catch (a) {
                            alert(yb + k + Bb)
                        }
                    }
                }
            }
        }
        __gwt_getMetaProperty = function (a) {
            var b = c[a];
            return b == null ? null : b
        };
        u = d;
        ritz_tviz_charts.__errFn = e
    }

    function F() {
        function e(a) {
            var b = a.lastIndexOf(Cb);
            if (b == -1) {
                b = a.length
            }
            var c = a.indexOf(Db);
            if (c == -1) {
                c = a.length
            }
            var d = a.lastIndexOf(Eb, Math.min(c, b));
            return d >= X ? a.substring(X, d + Y) : cb
        }

        function f(a) {
            if (a.match(/^\w+:\/\//)) {} else {
                var b = r.createElement(Fb);
                b.src = a + Gb;
                a = e(b.src)
            }
            return a
        }

        function g() {
            var a = __gwt_getMetaProperty(Hb);
            if (a != null) {
                return a
            }
            return cb
        }

        function h() {
            var a = r.getElementsByTagName(kb);
            for (var b = X; b < a.length; ++b) {
                if (a[b].src.indexOf(Ib) != -1) {
                    return e(a[b].src)
                }
            }
            return cb
        }

        function i() {
            var a = r.getElementsByTagName(Jb);
            if (a.length > X) {
                return a[a.length - Y].href
            }
            return cb
        }

        function j() {
            var a = r.location;
            return a.href == a.protocol + Kb + a.host + a.pathname + a.search + a.hash
        }
        var k = g();
        if (k == cb) {
            k = h()
        }
        if (k == cb) {
            k = i()
        }
        if (k == cb && j()) {
            k = e(r.location.href)
        }
        k = f(k);
        return k
    }

    function G(a) {
        if (a.match(/^\//)) {
            return a
        }
        if (a.match(/^[a-zA-Z]+:\/\//)) {
            return a
        }
        return ritz_tviz_charts.__moduleBase + a
    }

    function H() {
        var i = [];
        var j = X;

        function k(a, b) {
            var c = i;
            for (var d = X, e = a.length - Y; d < e; ++d) {
                c = c[a[d]] || (c[a[d]] = [])
            }
            c[a[e]] = b
        }
        var l = [];
        var m = [];

        function n(a) {
            var b = m[a](),
                c = l[a];
            if (b in c) {
                return b
            }
            var d = [];
            for (var e in c) {
                d[c[e]] = e
            }
            if (u) {
                u(a, d, b)
            }
            throw null
        }
        m[Lb] = function () {
            var b = null;
            var c = Mb;
            try {
                if (!b) {
                    var d = location.search;
                    var e = d.indexOf(Nb);
                    if (e >= X) {
                        var f = d.substring(e + Ob);
                        var g = d.indexOf(Pb, e);
                        if (g < X) {
                            g = d.length
                        }
                        b = d.substring(e + Ob, g)
                    }
                }
                if (!b) {
                    b = __gwt_getMetaProperty(Lb)
                }
                if (!b) {
                    b = q[Qb]
                }
                if (b) {
                    c = b
                }
                while (b && !__gwt_isKnownPropertyValue(Lb, b)) {
                    var h = b.lastIndexOf(Rb);
                    if (h < X) {
                        b = null;
                        break
                    }
                    b = b.substring(X, h)
                }
            } catch (a) {
                alert(Sb + a)
            }
            q[Qb] = c;
            return b || Mb
        };
        l[Lb] = {
            'ar_EG': X,
            'az_AZ': Y,
            'be_BY': Tb,
            'bg_BG': Ub,
            'bn_IN': Vb,
            'ca_ES': Wb,
            'cs_CZ': Xb,
            'da_DK': Ob,
            'de_CH': Yb,
            'de_DE': Zb,
            'default': gb,
            'el_GR': $b,
            'en_AU': _b,
            'en_CA': ac,
            'en_GB': bc,
            'en_IE': cc,
            'en_US': dc,
            'es_AR': ec,
            'es_BO': fc,
            'es_CL': gc,
            'es_CO': hc,
            'es_EC': ic,
            'es_ES': jc,
            'es_MX': kc,
            'es_PY': lc,
            'es_UY': mc,
            'es_VE': nc,
            'fi_FI': oc,
            'fil_PH': pc,
            'fr_CA': qc,
            'fr_FR': rc,
            'gu_IN': sc,
            'hi_IN': tc,
            'hr_HR': uc,
            'hu_HU': vc,
            'hy_AM': wc,
            'in_ID': xc,
            'it_IT': yc,
            'iw_IL': zc,
            'ja_JP': Ac,
            'ka_GE': Bc,
            'kk_KZ': Cc,
            'kn_IN': Dc,
            'ko_KR': Ec,
            'lt_LT': Fc,
            'lv_LV': Gc,
            'ml_IN': Hc,
            'mn_MN': Ic,
            'mr_IN': Jc,
            'nl_NL': Kc,
            'nn_NO': Lc,
            'no_NO': Mc,
            'or_IN': Nc,
            'pa_IN': Oc,
            'pl_PL': Pc,
            'pt_BR': Qc,
            'pt_PT': Rc,
            'ro_RO': Sc,
            'ru_RU': Tc,
            'sk_SK': Uc,
            'sl_SI': Vc,
            'sr_RS': Wc,
            'sv_SE': Xc,
            'ta_IN': Yc,
            'te_IN': Zc,
            'th_TH': $c,
            'tr_TR': _c,
            'uk_UA': ad,
            'vi_VN': bd,
            'zh_CN': cd,
            'zh_HK': dd,
            'zh_TW': ed
        };
        m[fd] = function () {
            var a = navigator.userAgent.toLowerCase();
            var b = r.documentMode;
            if (function () {
                    return a.indexOf(gd) != -1
                }()) return hd;
            if (function () {
                    return a.indexOf(jd) != -1 && (b >= gb && b < $b)
                }()) return kd;
            if (function () {
                    return a.indexOf(jd) != -1 && (b >= Zb && b < $b)
                }()) return ld;
            if (function () {
                    return a.indexOf(jd) != -1 && (b >= Yb && b < $b)
                }()) return md;
            if (function () {
                    return a.indexOf(nd) != -1 || b >= $b
                }()) return od;
            return cb
        };
        l[fd] = {
            'gecko1_8': X,
            'ie10': Y,
            'ie8': Tb,
            'ie9': Ub,
            'safari': Vb
        };
        __gwt_isKnownPropertyValue = function (a, b) {
            return b in l[a]
        };
        ritz_tviz_charts.__getPropMap = function () {
            var a = {};
            for (var b in l) {
                if (l.hasOwnProperty(b)) {
                    a[b] = n(b)
                }
            }
            return a
        };
        ritz_tviz_charts.__computePropValue = n;
        q.__gwt_activeModules[U].bindings = ritz_tviz_charts.__getPropMap;
        t(Q, pd);
        if (s()) {
            return G(qd)
        }
        var o;
        try {
            k([rd, ld], sd);
            k([td, ld], ud);
            k([vd, ld], ud + wd);
            k([xd, ld], yd);
            k([zd, ld], yd + wd);
            k([Ad, ld], Bd);
            k([Cd, hd], Dd);
            k([Ed, hd], Dd + wd);
            k([Fd, hd], Gd);
            k([Hd, ld], Id);
            k([Ad, od], Jd);
            k([Kd, od], Ld);
            k([rd, od], Md);
            k([Nd, hd], Od);
            k([Pd, ld], Qd);
            k([Rd, ld], Qd + wd);
            k([Sd, ld], Td);
            k([Ud, ld], Td + wd);
            k([td, hd], Vd);
            k([vd, hd], Vd + wd);
            k([Wd, ld], Xd);
            k([Yd, ld], Zd);
            k([$d, ld], _d);
            k([ae, kd], be);
            k([ce, kd], de);
            k([ee, kd], fe);
            k([Wd, kd], ge);
            k([he, od], ie);
            k([je, hd], ke);
            k([Wd, hd], le);
            k([je, kd], me);
            k([ne, kd], oe);
            k([pe, od], qe);
            k([Hd, hd], re);
            k([se, kd], te);
            k([Nd, od], ue);
            k([ve, kd], we);
            k([xe, hd], ye);
            k([ze, kd], Ae);
            k([ce, od], Be);
            k([$d, od], Ce);
            k([De, kd], Ee);
            k([Fe, od], Ge);
            k([He, kd], Ie);
            k([Je, kd], Ie + wd);
            k([ae, od], Ke);
            k([Le, od], Me);
            k([Ne, od], Me + wd);
            k([td, od], Oe);
            k([vd, od], Oe + wd);
            k([Pe, hd], Qe);
            k([Re, kd], Se);
            k([Te, ld], Ue);
            k([Ve, hd], We);
            k([Xe, hd], We + wd);
            k([Ye, od], Ze);
            k([$e, od], Ze + wd);
            k([He, ld], _e);
            k([Je, ld], _e + wd);
            k([af, od], bf);
            k([he, ld], cf);
            k([xe, od], df);
            k([He, hd], ef);
            k([Je, hd], ef + wd);
            k([ff, kd], gf);
            k([Re, ld], hf);
            k([Ye, kd], jf);
            k([$e, kd], jf + wd);
            k([kf, hd], lf);
            k([mf, hd], nf);
            k([ of , hd], pf);
            k([qf, hd], pf + wd);
            k([Cd, ld], rf);
            k([Ed, ld], rf + wd);
            k([Mb, od], sf);
            k([tf, kd], uf);
            k([vf, ld], wf);
            k([xf, ld], wf + wd);
            k([Ye, ld], yf);
            k([$e, ld], yf + wd);
            k([zf, ld], Af);
            k([Bf, ld], Af + wd);
            k([Mb, kd], Cf);
            k([Le, kd], Df);
            k([Ne, kd], Df + wd);
            k([Ef, kd], Ff);
            k([Gf, ld], Hf);
            k([If, od], Jf);
            k([Kf, kd], Lf);
            k([Mf, ld], Nf);
            k([Of, ld], Nf + wd);
            k([je, od], Pf);
            k([Mf, kd], Qf);
            k([Of, kd], Qf + wd);
            k([Cd, od], Rf);
            k([Ed, od], Rf + wd);
            k([vf, od], Sf);
            k([xf, od], Sf + wd);
            k([Kd, hd], Tf);
            k([ff, ld], Uf);
            k([De, od], Vf);
            k([Ve, kd], Wf);
            k([Xe, kd], Wf + wd);
            k([ae, ld], Xf);
            k([Yf, hd], Zf);
            k([ff, hd], $f);
            k([af, hd], _f);
            k([Ad, kd], ag);
            k([Mb, ld], bg);
            k([Mb, hd], cg);
            k([dg, ld], eg);
            k([fg, ld], eg + wd);
            k([dg, hd], gg);
            k([fg, hd], gg + wd);
            k([hg, ld], ig);
            k([mf, ld], jg);
            k([kg, kd], lg);
            k([$d, kd], mg);
            k([Kf, hd], ng);
            k([og, kd], pg);
            k([qg, hd], rg);
            k([sg, hd], rg + wd);
            k([tg, od], ug);
            k([Fd, ld], vg);
            k([wg, kd], xg);
            k([Pd, kd], yg);
            k([Rd, kd], yg + wd);
            k([kf, kd], zg);
            k([Pe, od], Ag);
            k([pe, ld], Bg);
            k([De, hd], Cg);
            k([vf, kd], Dg);
            k([xf, kd], Dg + wd);
            k([Eg, kd], Fg);
            k([dg, kd], Gg);
            k([fg, kd], Gg + wd);
            k([hg, od], Hg);
            k([ of , ld], Ig);
            k([qf, ld], Ig + wd);
            k([Yd, kd], Jg);
            k([ee, hd], Kg);
            k([Hd, kd], Lg);
            k([Sd, od], Mg);
            k([Ud, od], Mg + wd);
            k([Yf, ld], Ng);
            k([af, kd], Og);
            k([kf, ld], Pg);
            k([kg, hd], Qg);
            k([kg, od], Rg);
            k([wg, od], Sg);
            k([zf, hd], Tg);
            k([Bf, hd], Tg + wd);
            k([Hd, od], Ug);
            k([hg, hd], Vg);
            k([pe, hd], Wg);
            k([Fd, od], Xg);
            k([ff, od], Yg);
            k([xd, kd], Zg);
            k([zd, kd], Zg + wd);
            k([Re, od], $g);
            k([Sd, kd], _g);
            k([Ud, kd], _g + wd);
            k([og, od], ah);
            k([ae, hd], bh);
            k([xd, od], dh);
            k([zd, od], dh + wd);
            k([pe, kd], eh);
            k([he, kd], fh);
            k([hg, kd], gh);
            k([ee, ld], hh);
            k([Te, hd], ih);
            k([af, ld], jh);
            k([Ve, od], kh);
            k([Xe, od], kh + wd);
            k([ve, od], lh);
            k([mf, kd], mh);
            k([Kd, ld], nh);
            k([If, kd], oh);
            k([Mf, hd], ph);
            k([Of, hd], ph + wd);
            k([Ef, od], qh);
            k([zf, od], rh);
            k([Bf, od], rh + wd);
            k([De, ld], sh);
            k([tg, hd], th);
            k([Gf, hd], uh);
            k([rd, hd], vh);
            k([kg, ld], wh);
            k([Le, hd], xh);
            k([Ne, hd], xh + wd);
            k([xd, hd], yh);
            k([zd, hd], yh + wd);
            k([He, od], zh);
            k([Je, od], zh + wd);
            k([se, od], Ah);
            k([Fe, hd], Bh);
            k([Kf, ld], Ch);
            k([Ye, hd], Dh);
            k([$e, hd], Dh + wd);
            k([Eg, hd], Eh);
            k([Pd, od], Fh);
            k([Rd, od], Fh + wd);
            k([ of , od], Gh);
            k([qf, od], Gh + wd);
            k([wg, hd], Hh);
            k([se, hd], Ih);
            k([Fe, kd], Jh);
            k([tf, od], Kh);
            k([Pe, kd], Lh);
            k([Pd, hd], Mh);
            k([Rd, hd], Mh + wd);
            k([qg, kd], Nh);
            k([sg, kd], Nh + wd);
            k([Sd, hd], Oh);
            k([Ud, hd], Oh + wd);
            k([Fd, kd], Ph);
            k([Gf, kd], Qh);
            k([ze, od], Rh);
            k([ of , kd], Sh);
            k([qf, kd], Sh + wd);
            k([Ef, hd], Th);
            k([Kd, kd], Uh);
            k([Nd, kd], Vh);
            k([tg, kd], Wh);
            k([Yd, od], Xh);
            k([xe, kd], Yh);
            k([If, ld], Zh);
            k([ne, od], $h);
            k([ne, ld], _h);
            k([Eg, ld], ai);
            k([zf, kd], bi);
            k([Bf, kd], bi + wd);
            k([Ef, ld], ci);
            k([vf, hd], di);
            k([xf, hd], di + wd);
            k([Yf, od], ei);
            k([qg, od], fi);
            k([sg, od], fi + wd);
            k([Kf, od], gi);
            k([mf, od], hi);
            k([ce, hd], ii);
            k([Fe, ld], ji);
            k([dg, od], ki);
            k([fg, od], ki + wd);
            k([Te, od], li);
            k([Wd, od], mi);
            k([Cd, kd], ni);
            k([Ed, kd], ni + wd);
            k([je, ld], oi);
            k([Re, hd], pi);
            k([ce, ld], qi);
            k([rd, kd], ri);
            k([Ad, hd], si);
            k([td, kd], ti);
            k([vd, kd], ti + wd);
            k([ze, hd], ui);
            k([xe, ld], vi);
            k([Yf, kd], wi);
            k([Nd, ld], xi);
            k([qg, ld], yi);
            k([sg, ld], yi + wd);
            k([og, hd], zi);
            k([kf, od], Ai);
            k([ze, ld], Bi);
            k([Ve, ld], Ci);
            k([Xe, ld], Ci + wd);
            k([he, hd], Di);
            k([Gf, od], Ei);
            k([og, ld], Fi);
            k([$d, hd], Gi);
            k([Yd, hd], Hi);
            k([tf, hd], Ii);
            k([se, ld], Ji);
            k([Eg, od], Ki);
            k([tg, ld], Li);
            k([Mf, od], Mi);
            k([Of, od], Mi + wd);
            k([Te, kd], Ni);
            k([ee, od], Oi);
            k([If, hd], Pi);
            k([Pe, ld], Qi);
            k([ve, hd], Ri);
            k([ne, hd], Si);
            k([tf, ld], Ti);
            k([Le, ld], Ui);
            k([Ne, ld], Ui + wd);
            k([ve, ld], Vi);
            k([wg, ld], Wi);
            o = i[n(Lb)][n(fd)];
            var p = o.indexOf(Xi);
            if (p != -1) {
                j = parseInt(o.substring(p + Y), gb);
                o = o.substring(X, p)
            }
        } catch (a) {}
        ritz_tviz_charts.__softPermutationId = j;
        return G(o + Yi)
    }

    function I() {
        if (!q.__gwt_stylesLoaded) {
            q.__gwt_stylesLoaded = {}
        }
        t(Zi, R);
        t(Zi, $i)
    }
    D();
    ritz_tviz_charts.__moduleBase = F();
    v[U].moduleBase = ritz_tviz_charts.__moduleBase;
    var J = H();
    if (q) {
        var K = !!(q.location.protocol == _i || q.location.protocol == aj);
        q.__gwt_activeModules[U].canRedirect = K;

        function L() {
            var b = bj;
            try {
                q.sessionStorage.setItem(b, b);
                q.sessionStorage.removeItem(b);
                return true
            } catch (a) {
                return false
            }
        }
        if (K && L()) {
            var M = cj;
            var N = q.sessionStorage[M];
            if (!/^https?:\/\/(localhost|127\.0\.0\.1|[a-zA-Z0-9.-]+\.(corp|prod)\.google\.com):[0-9]+\/.*$/.test(N)) {
                if (N && (window.console && console.log)) {
                    console.log(dj + N)
                }
                N = cb
            }
            if (N && !q[M]) {
                q[M] = true;
                q[M + ej] = F();
                var O = r.createElement(kb);
                O.src = N;
                var P = r.getElementsByTagName(pb)[X];
                P.insertBefore(O, P.firstElementChild || P.children[X]);
                return false
            }
        }
    }
    I();
    t(Q, $i);
    C(J);
    return true
}
ritz_tviz_charts.succeeded = ritz_tviz_charts();