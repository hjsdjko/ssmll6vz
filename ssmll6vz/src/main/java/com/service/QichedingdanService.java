package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.QichedingdanEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.QichedingdanVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.QichedingdanView;


/**
 * 汽车订单
 *
 * @author 
 * @email 
 * @date 2021-06-08 10:11:38
 */
public interface QichedingdanService extends IService<QichedingdanEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<QichedingdanVO> selectListVO(Wrapper<QichedingdanEntity> wrapper);
   	
   	QichedingdanVO selectVO(@Param("ew") Wrapper<QichedingdanEntity> wrapper);
   	
   	List<QichedingdanView> selectListView(Wrapper<QichedingdanEntity> wrapper);
   	
   	QichedingdanView selectView(@Param("ew") Wrapper<QichedingdanEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<QichedingdanEntity> wrapper);
   	
}

