package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.QichedingdanDao;
import com.entity.QichedingdanEntity;
import com.service.QichedingdanService;
import com.entity.vo.QichedingdanVO;
import com.entity.view.QichedingdanView;

@Service("qichedingdanService")
public class QichedingdanServiceImpl extends ServiceImpl<QichedingdanDao, QichedingdanEntity> implements QichedingdanService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<QichedingdanEntity> page = this.selectPage(
                new Query<QichedingdanEntity>(params).getPage(),
                new EntityWrapper<QichedingdanEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<QichedingdanEntity> wrapper) {
		  Page<QichedingdanView> page =new Query<QichedingdanView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<QichedingdanVO> selectListVO(Wrapper<QichedingdanEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public QichedingdanVO selectVO(Wrapper<QichedingdanEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<QichedingdanView> selectListView(Wrapper<QichedingdanEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public QichedingdanView selectView(Wrapper<QichedingdanEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

}
