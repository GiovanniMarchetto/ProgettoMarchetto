package it.units.filters;

import it.units.utils.FilterAssistant;
import it.units.utils.FixedVariables;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebFilter
public class UploaderFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) {
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        if (FilterAssistant.filtroPerRuolo(servletRequest, FixedVariables.UPLOADER,true))
            filterChain.doFilter(servletRequest, servletResponse);
        else{
            HttpServletResponse httpServletResponse = (HttpServletResponse) servletResponse;
            httpServletResponse.setStatus(HttpServletResponse.SC_FORBIDDEN);
        }
        //TODO: verifica se funziona il forbidden
    }

    @Override
    public void destroy() {
    }
}